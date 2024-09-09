const ModalZoom = ({foto}) => {
    return (
    <>
        <dialog open={!!foto}>
            <p>Hi</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    </>)
}

export default ModalZoom