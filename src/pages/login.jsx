import React, { useState } from "react";
import Navbar from "../components/navbar.jsx";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!form.username || !form.password) {
            setError("Please enter both username and password.");
            return;
        }
        // Handle login logic here
        alert(`Logged in as ${form.username}`);
    };

    return (
        <>
        <Navbar />
        <div style={{ maxWidth: 350, margin: "70px auto", padding: 25, border: "3px solid #ccc", borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
                <button type="submit" className="border rounded-lg bg-blue-200 font-bold" style={{ width: "100%", padding: 10 }}>Login</button>
            </form>
        </div>
        </>
    );
};

export default Login;