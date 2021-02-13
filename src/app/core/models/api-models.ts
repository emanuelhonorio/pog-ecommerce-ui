export interface CreateProdutoDTO {
  nome?: string;
  descricao?: string;
  marca?: string;
  peso?: number;
  modelo?: string;
  categorias?: number[];
  fotos?: string[];
}

export interface CreateEstoqueDTO {
  id?: number;
  produtoId?: number;
  tamanhoId?: number;
  corId?: number;
  qtdEstoque?: number;
  acrescimoValor?: number;
}

export interface ProdutoFilter {
  nome?: string;
  marca?: string;
  categorias?: number[];
  valorDe?: number;
  valorAte?: number;
}

export enum StatusCompraEnum {
  PENDING = 'PENDING',
  DONE = 'DONE',
  PREPARING = 'PREPARING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
}

export interface CompraFilter {
  id?: number;
  status?: keyof typeof StatusCompraEnum;
  data?: Date;
  deleted?: boolean;
  entregue?: boolean;
}

export enum TipoPagamentoEnum {
  CARTAO = 'CARTAO',
  A_VISTA = 'A_VISTA',
  CARTAO_PRESENCIAL = 'CARTAO_PRESENCIAL',
}

export interface Compra {
  id?: number;
  total?: number;
  items?: ItemCompra[];
  usuario?: Usuario;
  status: keyof typeof StatusCompraEnum;
  enderecoDeEntrega?: Endereco;
  tipoPagamento?: keyof typeof TipoPagamentoEnum;
  trocoPara?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface Endereco {
  id?: number;
  cep?: string;
  complemento?: string;
  numero?: string;
}

export interface ItemCompra {
  id?: number;
  produto?: Produto;
  nomeCor?: string;
  nomeTamanho?: string;
  quantidade?: number;
  subtotal?: number;
}

export interface Produto {
  id?: number;
  nome?: string;
  descricao?: string;
  marca?: string;
  modelo?: string;
  peso?: number;
  valorBase?: number;
  usuario?: Usuario;
  categorias?: Categoria[];
  estoques?: Estoque[];
  fotos?: Foto[];
  cores?: Cor[];
  tamanhos?: Tamanho[];
}

export interface Foto {
  id?: number;
  imageUrl?: string;
}

export interface Estoque {
  id?: number;
  tamanho?: Tamanho;
  cor?: Cor;
  qtdEstoque?: number;
  acrescimoValor?: number;
}

export interface Categoria {
  id?: number;
  nome?: string;
}

export interface Cor {
  id?: number;
  nome?: string;
}

export interface Tamanho {
  id?: number;
  nome?: string;
}

export interface Usuario {
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
  admin?: boolean;
}

export interface CompraDTO {
  enderecoId?: number;
  tipoPagamento?: keyof typeof TipoPagamentoEnum;
  trocoPara?: number;
  itens?: ItemCompraDTO[];
}

export interface ItemCompraDTO {
  produtoId?: number;
  corId?: number;
  tamanhoId?: number;
  quantidade?: number;
}
