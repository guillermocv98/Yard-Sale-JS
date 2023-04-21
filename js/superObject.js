class SuperObject {

    static isObject(subject) {
        return Object.prototype.toString.call(subject) === '[object Object]';
    };

    static isArray(subject) {
        return Array.isArray(subject);
    };

    static deepCopy(subject) {
        let copySubject;
        const subjectIsArray = isArray(subject);
        const subjectIsObject = isObject(subject);
    
        if (subjectIsArray) {
            copySubject = [];
        } else if (subjectIsObject) {
            copySubject = {};
        } else {
            return subject;
        }
    
        for (key in subject) {
            const keyIsObject = isObject(subject[key]);
    
            if (keyIsObject) {
                copySubject[key] = deepCopy(subject[key]);
            } else {
                if (subjectIsArray) {
                    copySubject.push(subject[key]);
                } else {
                    copySubject[key] = subject[key];
                }
            }
        };
    
        return copySubject;
    };

    static deepFreeze(obj) {
        if (typeof obj == "object") {
          Object.freeze(obj);
        } else {
          return obj;
        }
        for (let key in obj) {
          deepFreeze(obj[key]);
        };
        return obj;
    };

};