const func = async () => {
    const response = await window.demo.ping()
    const resp = document.getElementById('resp')
    resp.innerText = `${response}`
}

const pingBtn = document.getElementById('ping')
pingBtn.addEventListener('click',  () => {
    func()
});
