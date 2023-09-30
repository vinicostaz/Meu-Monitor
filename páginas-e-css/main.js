function gerarQRCode() {
    const urlInput = "https://ead.unifor.br/ava/login/"; // URL que você deseja transformar em QR code
    const qrCodeCanvas = document.getElementById("qrcode");
    
    // Crie uma instância do QRious com as configurações desejadas
    const qr = new QRious({
        element: qrCodeCanvas,
        value: urlInput,
        size: 250 // Tamanho do QR code
    });
}
gerarQRCode()