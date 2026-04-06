$(document).ready(function () {
    const filtros = {
        tipo: 'todos',
        genero: 'todos'
    };

    const $produtos = $('.cards-grid > div');

    function normalizar(texto) {
        return (texto || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function normalizarTipo(tipo) {
        const valor = normalizar(tipo);

        if (valor === 'selecao' || valor === 'selecao' || valor === 'brasil' || valor === 'brazil' || valor === 'selecao-brasileira' || valor === 'selecaobrasileira') {
            return 'selecao-brasileira';
        }

        if (valor === 'chuteiras') {
            return 'chuteira';
        }

        return valor;
    }

    function obterTitulo($produto) {
        return normalizar($produto.find('.card-title').first().text());
    }

    function obterTipo($produto) {
        const tipoAtributo = normalizarTipo($produto.attr('data-type'));
        const titulo = obterTitulo($produto);

        if (tipoAtributo) {
            return tipoAtributo;
        }

        if ($produto.hasClass('selecao')) {
            return 'selecao-brasileira';
        }

        if ($produto.hasClass('chuteira2') || titulo.indexOf('chuteira') >= 0) {
            return 'chuteira';
        }

        if ($produto.hasClass('tenis') || titulo.indexOf('tenis') >= 0) {
            return 'tenis';
        }

        if ($produto.hasClass('camisa1') || titulo.indexOf('camisa') >= 0 || titulo.indexOf('camiseta') >= 0 || titulo.indexOf('bone') >= 0) {
            return 'camisa';
        }

        return 'todos';
    }

    function obterGenero($produto) {
        const generoAtributo = normalizar($produto.attr('data-gender'));
        const titulo = obterTitulo($produto);

        if (generoAtributo) {
            return generoAtributo;
        }

        if (titulo.indexOf('unissex') >= 0) {
            return 'unissex';
        }

        if (titulo.indexOf('feminina') >= 0 || titulo.indexOf('feminino') >= 0 || titulo.indexOf('jogadora') >= 0 || titulo.indexOf('torcedora') >= 0) {
            return 'feminino';
        }

        if (titulo.indexOf('masculina') >= 0 || titulo.indexOf('masculino') >= 0 || titulo.indexOf('jogador') >= 0 || titulo.indexOf('torcedor') >= 0) {
            return 'masculino';
        }

        return 'todos';
    }

    function correspondeGenero(generoProduto) {
        if (filtros.genero === 'todos') {
            return true;
        }

        if (filtros.genero === 'masculino') {
            return generoProduto === 'masculino';
        }

        if (filtros.genero === 'feminino') {
            return generoProduto === 'feminino';
        }

        if (filtros.genero === 'unissex') {
            return generoProduto === 'unissex';
        }

        return true;
    }

    function aplicarFiltros() {
        $produtos.each(function () {
            const $produto = $(this);
            const tipoProduto = obterTipo($produto);
            const generoProduto = obterGenero($produto);
            const correspondeTipo = filtros.tipo === 'todos' || tipoProduto === filtros.tipo;
            const visivel = correspondeTipo && correspondeGenero(generoProduto);

            $produto.toggle(visivel);
        });
    }

    $('.btn-toggle-nav button').click(function () {
        const texto = normalizar($(this).text());

        if (texto === 'todos') {
            filtros.tipo = 'todos';
            aplicarFiltros();
            return;
        }

        if (texto.indexOf('selecao') >= 0 && texto.indexOf('brasileira') >= 0) {
            filtros.tipo = 'selecao-brasileira';
            aplicarFiltros();
            return;
        }

        if (texto === 'camisas') {
            filtros.tipo = 'camisa';
            aplicarFiltros();
            return;
        }

        if (texto === 'tenis') {
            filtros.tipo = 'tenis';
            aplicarFiltros();
            return;
        }

        if (texto === 'chuteira') {
            filtros.tipo = 'chuteira';
            aplicarFiltros();
            return;
        }

        if (texto === 'masculino') {
            filtros.genero = 'masculino';
            aplicarFiltros();
            return;
        }

        if (texto === 'feminino') {
            filtros.genero = 'feminino';
            aplicarFiltros();
            return;
        }

        if (texto === 'unissex') {
            filtros.genero = 'unissex';
            aplicarFiltros();
        }
    });

    aplicarFiltros();
});
