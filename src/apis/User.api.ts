import axios from "./Base.api";

function store(params?: object) {
	return axios.post("/users", { params: params });
}

function list(params?: object) {
	return axios.get("/users", { params: params });
}

function detail(id: number, params?: object) {
	return axios.get("/users/" + id, { params: params });
}

const UserAPI = { list, detail, store };

export default UserAPI;
