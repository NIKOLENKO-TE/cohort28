## Общий порядок (схема) работы в режиме с доступом на запись к репо

1. Открыть имеющийся репо (или создать новый)
2. Добавить членов команды
3. Клонировать репо (скачать на компьютер)
4. Открыть репо (как проект в любимом редакторе)
5. Создать отдельную ветку **под задачу** и переключиться на нее
    1. `git checkout -b my_branch`
6. Вносим изменения в код
7. Фиксируем изменения
    1. `git add .`
    2. `git commit -m 'task 1'`
8. Выгружаем свою ветку на **GitHub**
    1. `git push -u origin branch_name`
9. Оформляем “заявку на улучшение” (pull request, **PR**, запрос слияния)
10. Выполнить слияние на **GitHub**
11. Выгрузить изменения с **GitHub**
    1. `git checkout main`
    2. `git pull`

## Выгрузить изменения с GitHub

- `git checkout main`
- `git pull`

## Исправление ошибки

```bash
git update-ref -d refs/remotes/origin/kolotailo
```

## Удаление веток

- локальную
    - `git branch -D название_ветки`
- дистанционная
    - `git push origin --delete название_ветки`

## Fork

- копия репо, созданная на GitHub