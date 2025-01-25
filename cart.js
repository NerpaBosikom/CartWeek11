function applyCoupon() {
  // Значение скидки
  const discount = 0.2; // 20%
  let totalPrice = 0;

  // Получаем все строки таблицы товаров
  const rows = document.querySelectorAll(".cart-table tbody tr");

  rows.forEach((row) => {
    // Получаем элементы цены, количества и итоговой суммы
    const priceCell = row.querySelector("td:nth-child(2)");
    const quantityInput = row.querySelector(".item-quantity");
    const totalCell = row.querySelector("td:nth-child(4)");

    // Извлекаем исходную цену (убираем ₽ и пробелы) и преобразуем в число
    const originalPrice = parseFloat(
      priceCell.innerHTML.replace("₽", "").trim().replace(/\s/g, "")
    );
    const quantity = Number(quantityInput.value); // Количество

    // Рассчитываем цену с учётом скидки
    const discountedPrice = originalPrice * (1 - discount);

    // Итоговая стоимость товара
    const itemTotal = discountedPrice * quantity;

    // Обновляем DOM: итоговая сумма для товара через innerHTML
    totalCell.innerHTML = `${itemTotal.toFixed(2)} ₽`;

    // Добавляем стоимость товара в общую сумму
    totalPrice += itemTotal;
  });

  // Обновляем итоговую сумму корзины через innerHTML
  const summaryTotal = document.querySelector(".summary-total strong");
  summaryTotal.innerHTML = `Итого: ${totalPrice.toFixed(2)} ₽`;
}
