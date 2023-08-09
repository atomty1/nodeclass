const register = (req, res)=>{
    let {firstName, lastName} = req.body;

}
const searchStudent = (req, res)=>{
    let {id} = req.params;
    
}
module.exports = {register, searchStudent};