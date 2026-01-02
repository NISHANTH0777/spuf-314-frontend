import { createContext, useContext, useState } from "react";
import { API_BASE } from "../api";


const AuthContext = createContext();


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);


async function login(username, password) {
const res = await fetch(`${API_BASE}/login`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ username, password })
});


if (!res.ok) return false;


const data = await res.json();
setUser(data.user);
return true;
}


function logout() {
setUser(null);
}


return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
);
}


export const useAuth = () => useContext(AuthContext);