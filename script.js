document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const query = document.getElementById('searchQuery').value;
    const formattedQuery = encodeURIComponent(query); // Formata a consulta para URL
    const googleSearchUrl = `https://www.in.gov.br/consulta/-/buscar/dou?q=ddm__text__21040__texto_pt_BR-${formattedQuery}%22&s=do1&exactDate=all&sortType=0&delta=20&orgPrin=Ministério+da+Educação`;
    window.open(googleSearchUrl, '_blank'); // Abre a busca no IN.gov.br em uma nova aba
});

