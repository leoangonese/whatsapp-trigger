const formatPhone = (number) => {
    const cleanNumber = number.replace(/D/g, '');

    return `55${cleanNumber}@c.us`
}

module.exports = { formatPhone };

