export class Storage {

    async AuthStorage(object) {
        await localStorage.setItem("authtoken", object.token);
        await localStorage.setItem("user", JSON.stringify(object.user))
        return true;
    }


    clearStorage() {
        localStorage.clearStorage();
    }

    getUserDetails() {
        if (localStorage.getItem("user") !== "undefined")
            return JSON.parse(localStorage.getItem("user"));
        else
            return null;
    }


    getConfig() {
        return {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authtoken")}`
            },
        };
    }

    getFileConfig() {
        return {
            headers: {
                "Content-Type": "multipart/form-data",
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("authtoken")}`,
            },
        }
    }

    getToken() {
        return localStorage.getItem("authtoken");
    }


}