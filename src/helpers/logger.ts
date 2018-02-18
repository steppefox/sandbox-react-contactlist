type TLevel = 'info' | 'warn' |'error';
type TMessage = Array<String|Object>;

/**
 * Simple logging abstraction
 */
export default function logger(level: TLevel, ...rest: TMessage) {
    console[level](...rest); // "debug" with colors and wonderful namespaces will be better ofc.
};
