var waAPIUrl = 'https://api.whatsapp.com/send?phone=',
    waNumber = document.getElementById('wa-number');

document.getElementById('submit').addEventListener('submit', function () {
    waNumber = waNumber.value.match(/[0-9]+/g).join('');
    chrome.tabs.create({
        url: waAPIUrl + waNumber
    })
});