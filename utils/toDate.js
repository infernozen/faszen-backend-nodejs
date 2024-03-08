const toDate = (date) => {
    const createTime = new Date(date);

    // Extract date components
    const day = String(createTime.getDate()).padStart(2, '0');
    const month = String(createTime.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = createTime.getFullYear();

    // Formatted date
    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate
};

module.exports = {
    toDate
}

