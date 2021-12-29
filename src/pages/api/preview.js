export default function handler(req, res) {
    res.setPreviewData({ name: 'yoyo', age: '41'})
    //res.redirect(`http://localhost:5001/about`)
    //res.clearPreviewData()
    res.end('Preview mode enabled')

}
