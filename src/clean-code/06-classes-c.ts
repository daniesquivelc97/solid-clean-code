(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProperties {
        birthdate: Date,
        gender: Gender,
        name: string,
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate, }: PersonProperties) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role, }: UserProperties) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }

    }

    interface SettingsProperties {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder, }: SettingsProperties
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory,
        }: UserSettingsProperties) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory, });
        }
    }

    const userSettings = new UserSettings(
        {
            birthdate: new Date('1985-10-21'),
            email: 'fernando@google.com',
            gender: 'M',
            lastOpenFolder: '/home',
            name: 'Fernando',
            role: 'Admin',
            workingDirectory: '/usr/home',
        }
    );

    console.log({ userSettings });

})();