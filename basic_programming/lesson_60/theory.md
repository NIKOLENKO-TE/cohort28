<ol>
<li> Multithreading один из вариантов многозадачности. Создание нового треда в аплликации, 
равносильно созданию нового стека функций. Т. е. в многопоточной аппликации могут одновременно работать несколько стеков.
</li>
<li> Создать новую задачу в Java можно или имплементировав интерфейс Runnable, или рсширяя класс Thread. 
В любой случае надо переопределить метод run в котором и будет реализована новая задача.
</li>
<li> Чтобы новый тред стартовал, надо создать объект типа Thread передав в конструктор объект типа Runnable, 
и после этого вызвать у объекта типа Thread метод start.
</li>
<li> Если необходимо, чтобы один тред дождался завершения другого треда, то в процессе работы первого треда, 
надо у объекта сторого треда вызвать метод join.
</li>
<li> Подробнее смотрите в презентации.
</li>
</ol>