document.getElementById('formOrcamento').addEventListener('submit', function (e) {
  e.preventDefault();

  const tipo = document.getElementById('tipoServico').value;
  const metragem = parseFloat(document.getElementById('metragem').value);
  const local = document.getElementById('local').value.trim();
  const resultado = document.getElementById('resultado');

  // Valores médios por m² (você pode ajustar conforme a empresa)
  let precoM2 = 0;
  if (tipo === 'forro') precoM2 = 70;
  if (tipo === 'sanca') precoM2 = 90;
  if (tipo === 'moldura') precoM2 = 50;
  if (tipo === 'bandeja') precoM2 = 85;

  const total = precoM2 * metragem;

  // Exibir resultado
  resultado.innerHTML = `
    <h3>💰 Orçamento Estimado</h3>
    <p><strong>Serviço:</strong> ${tipo.toUpperCase()}</p>
    <p><strong>Área:</strong> ${metragem} m²</p>
    <p><strong>Local:</strong> ${local}</p>
    <p><strong>Valor estimado:</strong> <span style="color:green;">R$ ${total.toFixed(2)}</span></p>
    <a href="https://wa.me/5527999703158?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20${tipo}%20de%20${metragem}m²%20em%20${local}." target="_blank">
      <button class="submit-button">Enviar pelo WhatsApp</button>
    </a>
  `;
});
