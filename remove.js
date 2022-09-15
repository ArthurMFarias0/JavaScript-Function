const showList = require('./show')
const prompt = require('prompt-sync')();

function removeFormList(list) {
    showList(list)
    const positionText = prompt('Qual elemento você deseja remover?: ')
    const position = Number(positionText) - 1
    list.splice(position, 1);
}

module.exports = removeFormList;