{
  description = "ia-bot-ahmed development flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { self, nixpkgs, ... }:
    let
      systems = [
        "aarch64-linux"
        "x86_64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      forEachSystem = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
      rev = self.shortRev or self.dirtyShortRev or "dirty";
    in
    {
      devShells = forEachSystem (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            nodejs_20
            pkg-config
            openssl
            git
          ];
        };
      });

      overlays = {
        default =
          final: _prev:
          let
            node_modules = final.callPackage ./nix/node_modules.nix {
              inherit rev;
            };
          in
          rec {
            ia-bot-ahmed = final.callPackage ./nix/ia-bot-ahmed.nix {
              inherit node_modules;
            };
            ia-bot-ahmed-desktop = final.callPackage ./nix/desktop.nix {
              inherit ia-bot-ahmed;
            };
          };
      };

      packages = forEachSystem (
        pkgs:
        let
          node_modules = pkgs.callPackage ./nix/node_modules.nix {
            inherit rev;
          };
        in
        rec {
          default = ia-bot-ahmed;
          ia-bot-ahmed = pkgs.callPackage ./nix/ia-bot-ahmed.nix {
            inherit node_modules;
          };
          ia-bot-ahmed-desktop = pkgs.callPackage ./nix/desktop.nix {
            inherit ia-bot-ahmed;
          };
          # Updater derivation with fakeHash - build fails and reveals correct hash
          node_modules_updater = node_modules.override {
            hash = pkgs.lib.fakeHash;
          };
        }
      );
    };
}
