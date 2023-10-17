import Login from "../../components/signup-login";
import { BASE_URL } from "../../config";

function AdminLogin() {
    return <div style={{marginTop:120}}>
        <Login url={`${BASE_URL}/admin/login`} action={"Login"} />
    </div>
}
export default AdminLogin;