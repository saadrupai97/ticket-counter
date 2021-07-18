document.getElementById('firstclass-increase').addEventListener('click',function(){
    ticketUpdateHandler('firstclass', true);
});

document.getElementById('firstclass-decrease').addEventListener('click',function(){
    ticketUpdateHandler('firstclass', false);
});

document.getElementById('economic-increase').addEventListener('click', function(){
    ticketUpdateHandler('economic', true);
})

document.getElementById('economic-decrease').addEventListener('click', function(){
    ticketUpdateHandler('economic', false);
})

document.getElementById('book-now-button').addEventListener('click', function(){
    alert('Ticket Booked Successfully!');
    document.getElementById('firstclass-input').value = "0";
    document.getElementById('economic-input').value = "0";
    document.getElementById('sub-total').innerText = "500";
    document.getElementById('total-vat').innerText = "50";
    document.getElementById('grand-total').innerText = "550";

})


function ticketUpdateHandler(ticketClass, isIncrease){
    
    const ticketClassInput = document.getElementById(ticketClass + '-input');
    const ticketClassInputCount = parseInt(ticketClassInput.value);
    
    let ticketClassInputCountNew = ticketClassInputCount;
    
    if(isIncrease==true){
        ticketClassInputCountNew = ticketClassInputCount + 1;
    }
    
    if(isIncrease==false && ticketClassInputCount > 0){
        ticketClassInputCountNew = ticketClassInputCount - 1;
    }
    
    ticketClassInput.value = ticketClassInputCountNew;

    calculateTotal();
}


function calculateTotal(){
    
    const firstClassInput = document.getElementById('firstclass-input').value;
    const firstClassInputCount = parseInt(firstClassInput);
    
    const economicInput = document.getElementById('economic-input').value;
    const economicInputCount = parseInt(economicInput);
    
    const firstClassCost = firstClassInputCount * 150;
    const economicCost = economicInputCount * 100;
    
    const totalPrice = firstClassCost + economicCost;
    document.getElementById('sub-total').innerText = '$' + totalPrice;

    const totalVat = totalPrice * 0.1;
    document.getElementById('total-vat').innerText = '$' + totalVat;
    
    const grandTotal = totalPrice + totalVat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
} 