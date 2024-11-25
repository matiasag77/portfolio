# **Portfolio Class Implementation**

## **Descripción del Proyecto**
Este repositorio contiene la implementación de una clase `Portfolio` que administra una colección de acciones (`Stock`) y permite calcular:
- Las ganancias (`Profit`) entre dos fechas dadas.
- El retorno anualizado (`Annualized Return`) como parte del Bonus Track.

Esta solución está desarrollada en **Node.js** con énfasis en modularidad, claridad y buenas prácticas de desarrollo.


---

## **Detalles Técnicos**
1. **Clase Stock**:
   - Representa una acción individual con precios históricos.
   - Método `Price(date)`: Retorna el precio de la acción en una fecha específica.

2. **Clase Portfolio**:
   - Administra una colección de acciones.
   - Método `Profit(startDate, endDate)`: Calcula las ganancias entre dos fechas.
   - Método `AnnualizedReturn(startDate, endDate)`: Calcula el retorno anualizado.

---

## **Bonus Track**
El cálculo del retorno anualizado usa la siguiente fórmula:
\[
\text{Annualized Return} = \left( \frac{\text{Final Value}}{\text{Initial Value}} \right)^{\frac{1}{\text{Years}}} - 1
\]
La diferencia de años entre dos fechas se calcula dividiendo el intervalo en días por 365.

---

### **1. Método `profit(startDate, endDate)`**

#### **Función**
Este método calcula las ganancias totales (`profit`) del portafolio entre dos fechas (`startDate` y `endDate`).

#### **Algoritmo**
1. **Inicialización**:
   - Crea una variable `profit` y la inicializa en 0.
   
2. **Iteración sobre las acciones**:
   - Utiliza `this.stocks.forEach()` para recorrer todas las acciones en el portafolio.
   - Para cada acción (`stock`):
     - Obtiene el precio inicial (`startPrice`) en `startDate` llamando a `stock.price(startDate)`.
     - Obtiene el precio final (`endPrice`) en `endDate` llamando a `stock.price(endDate)`.

3. **Cálculo de ganancias individuales**:
   - Calcula la diferencia de precio para esa acción: `endPrice - startPrice`.
   - Suma esta diferencia al total `profit`.

4. **Resultado final**:
   - Devuelve el total acumulado de ganancias.

#### **Complejidad**
- **Temporal**: \(O(n)\), donde \(n\) es el número de acciones en el portafolio. Esto asume que obtener el precio de una acción (`price`) tiene una complejidad \(O(1)\).
- **Espacial**: \(O(1)\), ya que no utiliza estructuras adicionales significativas.

#### **Ejemplo**
Supongamos que tienes dos acciones:
- Stock A:
  - Precio en `2023-01-01`: 100
  - Precio en `2024-01-01`: 150
- Stock B:
  - Precio en `2023-01-01`: 200
  - Precio en `2024-01-01`: 300

**Cálculo**:
\[
\text{profit} = (150 - 100) + (300 - 200) = 50 + 100 = 150
\]

---

### **2. Método `annualizedReturn(startDate, endDate)`**

#### **Función**
Este método calcula el retorno anualizado del portafolio entre las fechas dadas. El retorno anualizado es una medida de crecimiento promedio por año, que normaliza las ganancias independientemente del intervalo de tiempo.

#### **Algoritmo**
1. **Suma de precios iniciales y finales**:
   - Utiliza `this.stocks.reduce()` para sumar:
     - Los precios iniciales (`initial`) de todas las acciones en `startDate`.
     - Los precios finales (`final`) de todas las acciones en `endDate`.

2. **Cálculo del intervalo en años**:
   - Calcula la diferencia de tiempo entre `endDate` y `startDate` en milisegundos.
   - Divide esta diferencia entre \(1000 \times 60 \times 60 \times 24 \times 365\) para convertirla en años.

3. **Cálculo del retorno anualizado**:
   - Utiliza la fórmula:
     \[
     \text{Annualized Return} = \left( \frac{\text{final}}{\text{initial}} \right)^{\frac{1}{\text{years}}} - 1
     \]
   - Esto representa el crecimiento compuesto anual promedio.

4. **Resultado final**:
   - Devuelve el retorno anualizado.

#### **Complejidad**
- **Temporal**: \(O(n)\), donde \(n\) es el número de acciones en el portafolio.
- **Espacial**: \(O(1)\), ya que no utiliza estructuras adicionales significativas.

#### **Ejemplo**
Continuando con el ejemplo anterior:
- Suma inicial (`initial`):
  \[
  100 + 200 = 300
  \]
- Suma final (`final`):
  \[
  150 + 300 = 450
  \]
- Años entre `2023-01-01` y `2024-01-01`:
  \[
  \text{years} = \frac{(2024-01-01) - (2023-01-01)}{365 \text{ días}} = 1
  \]
- Retorno anualizado:
  \[
  \text{Annualized Return} = \left( \frac{450}{300} \right)^{\frac{1}{1}} - 1 = 1.5 - 1 = 0.5 \, \text{o 50\%}.
  \]

---

### **Diferencias principales entre ambos métodos**

| **Método**             | **Propósito**                                                                                   | **Resultado**                                       |
|-------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------|
| `profit`               | Calcula las ganancias absolutas entre las dos fechas.                                         | Ganancias totales (número simple).                |
| `annualizedReturn`     | Calcula el crecimiento promedio anualizado, normalizado por el intervalo de tiempo dado.      | Porcentaje de retorno anual compuesto (%).        |

