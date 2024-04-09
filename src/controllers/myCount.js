export const myCount = (req, res) => {
    const { opc } = req.params
    if (opc === "setting") {
        res.render("myCount_setting")
    } else {
        res.send(`<!DOCTYPE html>
        <html><h1>No se encontro la pagina</h1></html>
        `).status(404)
    }


} 