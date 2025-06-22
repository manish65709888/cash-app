// Toggle balance visibility
document.getElementById('toggleBalance').addEventListener('click', function () {
    const balanceAmount = document.getElementById('balanceAmount');
    const toggleIcon = document.getElementById('toggleBalance');

    if (balanceAmount.style.visibility === 'hidden') {
        balanceAmount.style.visibility = 'visible';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        balanceAmount.style.visibility = 'hidden';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
});

// Send money functionality
document.getElementById('sendMoney').addEventListener('click', function () {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (!recipient || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    document.querySelector('.container').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
    document.getElementById('successAmount').textContent = `$${amount}`;
    document.getElementById('successRecipient').textContent = recipient;
});

// Return back functionality
document.getElementById('returnBack').addEventListener('click', function () {
    document.getElementById('success').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});