## Частота выполнения коммита

- рекомендуется сохранять небольшую логическую задачу

## Просмотр состояния репо / раб/каталога

- `git status`
    - `git status -s` сжатый вывод

## Легенда `git status -s`

- `??` Untracked
- `M` Modified
- `A` Added
- `D` Deleted
- `R` Renamed

(зеленый цвет) - индикатор того, что изменения в файлах проиндексированы

## Состояния файлов в Git

- неотслеж.
- отслеживаемые
- игнорируемые

## Ветвление в Git

- ветка - изолированный поток разработки (еще одна версия проекта)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/95d3eea4-bdd9-4866-805a-55b03d066b78/f409508f-efaa-4084-8387-1b0fc8ab07f7/Untitled.png)

## Стратегии ветвления в Git

1. **Git Flow**
    1. `main/master/stable/production` - long-term (только для проверенного кода - “священный грааль”)
    2. `develop/current` - long-term (для тестирования, текущая разработка)
    3. `login/payments/bugfix1/issue01` - short-term
2. **GitHub Flow**
    1. `main` - long-term
    2. short-term branches

## Базовые команды работы с ветками

- `git branch` просмотр веток
    - `git branch -avv` подробный вывод
- `git branch новая_ветка` создать новую ветку от **текущей**
    - `git branch новая_ветка main` ответвиться от `**main**`
- `git checkout main` переключиться на ветку `main`
- `git branch -m новое_название` переименовать текущую ветку
- `git push -u origin название_ветки` выгрузить на GitHub
- `git checkout -b новая_ветка` создать и переключиться на новую ветку
    - `git checkout -b новая_ветка main`
- `git branch -D название_ветки`  удалить локальную ветку
- `git push origin --delete название_ветки` удалить дистанционную ветку

## Просмотр текущей привязки

```bash
git remote -v
```

## Слияние веток

- **Слияние (веток)** - объединение (перенос или интеграция) измений из одной ветки в другую
- `git merge название_ветки` выполнить слияние
- **перед слиянием необходимо переключиться на целевую ветку**

## Клонирование (скачивание) репо

- `git clone скопированная_ссылка`
- выполняется для скачивания на компьютер

## Пример клонирования для пользователей ОС Windows

1. Создать на раб/столе временный каталог
2. Нажав на него, ПКМ выбрать пункт `GitBash Here`

## Команды

- перейти в другой каталог
    - `cd ~/Downloads`

## Необходимые навыки для совместной работы

1. **Ветвление**
    1. стратегии
    2. базовые команды
2. **Совместной работы**
    1. модели и их особенности
    2. последовательность действий

## Модели совместной разработки

1. **С доступом на запись (shared repo model)**
    1. лучше подходит для небольших организованных команд с приватными проектами (репо)
2. **Без доступа на запись (Fork and pull model)**
    1. лучше подходит для проектов с открытым исходным кодом и неопределенным кругом разработчиков

## Общий порядок (схема) работы в режиме с доступом на запись к репо

1. Открыть имеющийся репо (или создать новый)
2. Добавить членов команды
3. Клонировать репо (скачать на компьютер)
4. Открыть репо (как проект в любимом редакторе)