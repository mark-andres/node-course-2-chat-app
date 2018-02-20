class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        let userRemoved;
        this.users = this.users.filter((user) => {
            if (user.id === id) {
                userRemoved = user;
                return false;
            } else {
                return true;
            }
        });
        return userRemoved;
    }
    getUser (id) {
        var users = this.users.filter((user) => user.id === id);
        return users[0];
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        return users.map((user) => user.name);
    }
}

module.exports = {Users};