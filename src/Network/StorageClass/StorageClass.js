export class Storage {

    async AuthStorage(object) {
        await localStorage.setItem("authtoken", object.token);
        await localStorage.setItem("user", JSON.stringify(object.user))
        return true;
    }


    clearStorage() {
        localStorage.removeItem("authtoken"); 
        localStorage.removeItem("user"); 

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
                "x-auth-token": `${localStorage.getItem("authtoken")}`
            },
        };
    }

    getFileConfig() {
        return {
            headers: {
                "Content-Type": "multipart/form-data",
                'Accept': 'application/json',
                "x-auth-token": `${localStorage.getItem("authtoken")}`,
            },
        }
    }

    getToken() {
        return localStorage.getItem("authtoken");
    }


}