<%- include('header'); %>
    <select>
        <option colspan="3" rowspan="1">Tankolások listája</option>
        <option colspan="3" rowspan="1">Audi Q3</option>
        <option colspan="3" rowspan="1">BMW X5</option>
    </select>
    <% for( let data of todos ) { %>
        <label> <input /> </label>
        <%}%>
        <button>Add hozzá</button>
            <%- include('footer'); %>