module.exports = {
    USERS: {
        GET: "api/username",
        GET_ONE: (id) => `api/username/${id}`,
        CREATE: "api/username",
    },
    ROOMS: {
        GET: "api/room",
        GET_ONE: (id) => `api/username/${id}`
    }
}