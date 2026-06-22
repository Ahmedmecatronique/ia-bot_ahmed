FROM alpine AS base

# Disable the runtime transpiler cache by default inside Docker containers.
# On ephemeral containers, the cache is not useful
ARG BUN_RUNTIME_TRANSPILER_CACHE_PATH=0
ENV BUN_RUNTIME_TRANSPILER_CACHE_PATH=${BUN_RUNTIME_TRANSPILER_CACHE_PATH}
RUN apk add libgcc libstdc++ ripgrep

FROM base AS build-amd64
COPY dist/ia-bot-ahmed-linux-x64-baseline-musl/bin/ia-bot-ahmed /usr/local/bin/ia-bot-ahmed

FROM base AS build-arm64
COPY dist/ia-bot-ahmed-linux-arm64-musl/bin/ia-bot-ahmed /usr/local/bin/ia-bot-ahmed

ARG TARGETARCH
FROM build-${TARGETARCH}
RUN ia-bot-ahmed --version
ENTRYPOINT ["ia-bot-ahmed"]
