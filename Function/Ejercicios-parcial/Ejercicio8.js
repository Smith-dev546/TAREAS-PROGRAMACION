import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular salario total
function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
    let valorHoraExtra = valorHoraNormal * 1.5;
    let pagoHorasExtras = horasExtras * valorHoraExtra;
    return salarioBase + pagoHorasExtras;
}

// Solicitar datos al usuario
rl.question('Salario base: ', (salarioBase) => {
    rl.question('Horas extras trabajadas: ', (horasExtras) => {
        rl.question('Valor de hora normal: ', (valorHoraNormal) => {
            
            let salarioTotal = calcularSalarioTotal(
                Number(salarioBase),
                Number(horasExtras),
                Number(valorHoraNormal)
            );
            
            console.log(`Salario total: $${salarioTotal}`);
            rl.close();
        });
    });
});