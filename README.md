# pixellabsoft.com

Сайтът на Пиксел Лаб Софт — приложенията на Пиксел Лаб ЕООД и правните им
текстове (поверителност, условия), на български и английски.

Статичен. Без зависимости — само Node.

```
cd "C:\Pixel Lab Claude\7 Pixel Lab Soft\sajt"
node build.mjs        # src/ → docs/
git add -A && git commit -m "..." && git push
```

GitHub Pages сервира `docs/` от клон `master`. Домейнът pixellabsoft.com е в
Namecheap; DNS-ът е там (A записи към GitHub Pages + CNAME www), пощата
support@ се пренасочва към pixellabsoft@gmail.com.

Ново приложение: файл в `src/apps/`, ред в `src/apps/index.mjs`, `node build.mjs`.
Текстовете описват какво приложението прави наистина — при промяна в кода
се променят и те (и копието им в самото приложение).
