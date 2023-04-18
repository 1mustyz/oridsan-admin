export class Storage {

    async AuthStorage(object) {
        await localStorage.setItem("authtoken", object.token);
        await localStorage.setItem("user", JSON.stringify(object))
        await localStorage.setItem("company", JSON.stringify(object));
        return true;
    }

    async SetCompany (object) {
        await localStorage.setItem("company", JSON.stringify(object));
        return true
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


    getCompany() {
        if (localStorage.getItem("company") !== "undefined")
            return JSON.parse(localStorage.getItem("company"));
        else
            return null;
    }

    getCompanies() {
        if (localStorage.getItem("companies") !== "undefined")
            return JSON.parse(localStorage.getItem("companies"));
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