class InlineAssetsPlugin {
    constructor(options = {}) {
        const { patterns = [] } = options;
        this.patterns = patterns;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            "InlineAssetsPlugin",
            (compilation, callback) => {
                for (const pattern of this.patterns) {
                    const fromSource = this.getSource(
                        compilation.getAsset(pattern.from)
                    );
                    const toSource = this.getSource(
                        compilation.getAsset(pattern.to)
                    );

                    const resultSource = toSource.replace(
                        pattern.pattern,
                        fromSource
                    );

                    compilation.updateAsset(pattern.to, {
                        source() {
                            return resultSource;
                        },
                        size() {
                            return resultSource.length;
                        },
                    });
                }

                callback();
            }
        );
    }

    getSource(asset) {
        let source = asset.source;
        if (typeof source === "function") {
            source = source();
        } else {
            source = source.source();
        }

        if (source instanceof Buffer) {
            return source.toString("utf8");
        }

        return source;
    }
}

module.exports.InlineAssetsPlugin = InlineAssetsPlugin;
