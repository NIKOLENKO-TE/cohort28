<ol>
<li> Понятие Complexity (вычислительная сложность), позволяет оценить эффективность алгоритмических решений. 
Простым языком можно сказать, что вычислительная сложность говорит, пропорционально какой функции растет колличеству
действий при обработки множества элементов, если увеличивать колличество элементов этого множества.
</li>
<li> Для описания вычислительной сложности используется т. н. "Big O notation". Например запись O(n), говорит о 
линейной сложности алгоритма. А O(log(n)), характеризует логарифмическую сложность.
</li>
<li> Если объект инкапсулирует внутри себя какое-то множество элементов, и есть необходимость перебрать все элементы 
этого множества, то с этим может возникнуть проблема. Если для передачи этого множества создать геттер, то возвращая 
ссылку, мы по сути даем небезопасный доступ к множеству за пределами объекта. Если возвращать копию множества, 
то это может повлиять на производительность. Для решения этой проблемы существует паттерн "Итератор". 
Суть паттерна это создать сторонний объект, который знает как "перебирать" (итерировать) множество элементов 
инкапсулированных в исходном объекте. Объект итератор должен иметь две функциональности: 
1) знать как определить есть ли следующий элемент; 
2) вернуть текущий элемент и перейти к следующему.
</li>
<li> В Java существует интерфейс Iterator<T> с двумя абстрактными методами: boolean hasNext(), 
возвращающий true если еще есть элементы, и false если дошли до конца множества, и T next() возвращающий 
текущий элемент, и переводящий "указатель" к следующему элементу. В интерфейсе Iterator существует еще 
дополнительный дефолтный метод void remove(), который имеет пустое тело. Но если нам надо реализовать 
функциональность корректного удаления текущего элемента в процессе итерирования, то метод remove надо переопределить.
</li>
<li> Класс инкапсулирущий множество, которое надо итерировать, может имплементировать интерфейс Iterable<T> у 
которого только один абстрактный метод Iterator<T> iterator(), возвращающий итератор для объектов данного класса.
</li>
<li> Для Iterable объектов можно использовать цикл for-each. Его сигнатура вот такая: for(T e: "set of T"){ do something}; 
В теле этого цикла переменная "e" принимает поочередно значение каждого элементаor(T e: "set of T"){ do something}; 
В теле этого цикла переменная "e" принимает поочередно значение каждого элемента из итерируемого множества. 
В цикле for-each нельзя модифицировать итерируемое множество.
</li>

</ol>