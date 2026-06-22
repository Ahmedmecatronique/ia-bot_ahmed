{
  lib,
  stdenvNoCC,
  callPackage,
  bun,
  nodejs,
  sysctl,
  makeBinaryWrapper,
  models-dev,
  ripgrep,
  installShellFiles,
  versionCheckHook,
  writableTmpDirAsHomeHook,
  node_modules ? callPackage ./node-modules.nix { },
}:
stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "ia-bot-ahmed";
  inherit (node_modules) version src;
  inherit node_modules;

  nativeBuildInputs = [
    bun
    nodejs # for patchShebangs node_modules
    installShellFiles
    makeBinaryWrapper
    models-dev
    writableTmpDirAsHomeHook
  ];

  configurePhase = ''
    runHook preConfigure

    cp -R ${finalAttrs.node_modules}/. .
    patchShebangs node_modules
    patchShebangs packages/*/node_modules

    runHook postConfigure
  '';

  env.MODELS_DEV_API_JSON = "${models-dev}/dist/_api.json";
  env.IA_BOT_AHMED_DISABLE_MODELS_FETCH = true;
  env.IA_BOT_AHMED_VERSION = finalAttrs.version;
  env.IA_BOT_AHMED_CHANNEL = "prod";

  buildPhase = ''
    runHook preBuild

    cd ./packages/ia-bot-ahmed
    bun --bun ./script/build.ts --single --skip-install
    bun --bun ./script/schema.ts schema.json

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    install -Dm755 dist/ia-bot-ahmed-*/bin/ia-bot-ahmed $out/bin/ia-bot-ahmed
    install -Dm644 schema.json $out/share/ia-bot-ahmed/schema.json

    wrapProgram $out/bin/ia-bot-ahmed \
      --prefix PATH : ${
        lib.makeBinPath (
          [
            ripgrep
          ]
          # bun runs sysctl to detect if running on rosetta2
          ++ lib.optional stdenvNoCC.hostPlatform.isDarwin sysctl
        )
      }

    runHook postInstall
  '';

  postInstall = lib.optionalString (stdenvNoCC.buildPlatform.canExecute stdenvNoCC.hostPlatform) ''
    # trick yargs into also generating zsh completions
    installShellCompletion --cmd ia-bot-ahmed \
      --bash <($out/bin/ia-bot-ahmed completion) \
      --zsh <(SHELL=/bin/zsh $out/bin/ia-bot-ahmed completion)
  '';

  nativeInstallCheckInputs = [
    versionCheckHook
    writableTmpDirAsHomeHook
  ];
  doInstallCheck = true;
  versionCheckKeepEnvironment = [ "HOME" "IA_BOT_AHMED_DISABLE_MODELS_FETCH" ];
  versionCheckProgramArg = "--version";

  passthru = {
    jsonschema = "${placeholder "out"}/share/ia-bot-ahmed/schema.json";
    env = finalAttrs.env;
  };

  meta = {
    description = "The open source coding agent";
    homepage = "https://ia-bot-ahmed.ai";
    license = lib.licenses.mit;
    mainProgram = "ia-bot-ahmed";
    inherit (node_modules.meta) platforms;
  };
})
