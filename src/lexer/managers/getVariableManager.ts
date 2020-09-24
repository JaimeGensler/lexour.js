export default function getVariableManager() {
    const storedValues: Map<any, any> = new Map();
    return {
        memorize: (key: any, value: any, overwrite = false) => {
            if (overwrite || !storedValues.has(key)) {
                storedValues.set(key, value);
                return true;
            }
            return false;
        },
        recall: (key: any) => storedValues.get(key),
        forget: (key: any) => storedValues.delete(key),
    };
}
