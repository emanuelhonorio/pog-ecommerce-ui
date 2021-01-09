export interface CategoriaI {
  id?: number;
  nome?: string;
}

export interface CorI {
  id?: number;
  nome?: string;
}

export interface TamanhoI {
  id?: number;
  nome?: string;
}

export interface FotoI {
  id?: number;
  imageUrl?: string;
}

export interface CreateProdutoDTO {
  nome?: string;
  descricao?: string;
  marca?: string;
  peso?: number;
  modelo?: string;
  categorias?: number[];
  fotos?: string[];
}

export interface CreateVariacaoDTO {
  produtoId?: number;
  tamanhoId?: number;
  corId?: number;
  qtdEstoque?: number;
  acrescimoValor?: number;
}