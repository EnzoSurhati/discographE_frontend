function DeleteUserButton() {
const deleteUserFunction = ({ userId, onDelete }) => {
    const handleDelete = () => {
        onDelete(userId)
    }
};

return (
    <button onClick={handleDelete}>
        Delete User
    </button>
)
};

export default DeleteUserButton;

{/* <button id="deleteButton">Delete User</button> */}
