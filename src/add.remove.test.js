import removeItem from "./removeItem";


describe('Remove item from list', ()=> {
    test('Add one new item to the list', () => {
        document.body.innerHTML =
        '<div>' +
        '  <ul id="list"></li>' +
        '</div>';
        removeItem();
        const list = document.querySelectorAll('#list li');
        expect(list).toHaveLength(list.length - 1);
    }); 
})







