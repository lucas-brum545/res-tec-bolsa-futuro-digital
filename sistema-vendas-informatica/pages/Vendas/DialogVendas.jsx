export default function DialogVendas({ open, onClose, onSave, venda }) {
    const [cliente, setCliente] = useState(venda ? venda.cliente : '');
    const [produto, setProduto] = useState(venda ? venda.produto : '');
    const [quantidade, setQuantidade] = useState(venda ? venda.quantidade : 1);