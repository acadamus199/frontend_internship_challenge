# Feedback

### 1. README.md
Warto by było, żeby README.md zawierał przydatne informacje dla osób chcących poznać projekt:
- krótki opis co to jest za aplikacja (wyświetlanie listy top albumów na z iTunes API)
- tech stack (React, TypeScript, Tailwindcss, ...)
- krótka instrukcja jak uruchomić aplikację lokalnie
- super byłby link do live demo
- może nawet screenshot z podstrony z listą albumów, żeby od razu po wejściu na repo było widać co to za apka

### 2. Prettier
Zainstaluj i używaj formatera kodu, np. [Prettier](https://prettier.io/). Jest on po to, żeby pilnować zasad co do stawania średników, odstępów itp. Jeśli jakiś standard nie jest przestrzegany 1) kod wygląda brzydko i się ciężko czyta 2) pracując nad jednym repo razem z innym developerem może powstać masa syfu.

W kilku miejscach też były zostawione console.logi albo zakomentowany kod. Dobrze jest też tego pilnować, ale od tego jest już linter kodu (eslint).


### 3. Organizacja plików
Zamiast się rozpisywać i przynudzać, po prostu proponuję ci poczytać o kilku konceptach.  
Wtedy pewnie ogarniesz co mam na myśli, w kontekście twojego projektu.  
Trochę uwag z tego tematu też napisałam w komentarzach w kodzie.

Koncepty:
 - atomic design
 - layout components 
 - React modules folder structure vs. components folder structure

### 4. Typescript
Super, że używasz TypeScripta, bo w końcu jest on teraz wykorzystywany praktycznie wszędzie.
Ale jeśli jedyna różnica w twoim projekcie między wersją bez TSa, a z TSem to rozszerzenia plików (.tsx zamiast .jsx), to nie ma on sensu i wręcz wprowadza bałagan. 

Na początek spróbuj się pozbyć np. wszystkich 'any'.
A potem proponuję po prostu poczytać materiały o tym jak korzystać z TypeScripta w React'cie, co ma sens a co nie, jak nadawać typy zmiennym/funkcjom/komponentom itp. 

### 5. Dark/Light mode
To nie działa 👀 W sensie zmienia się tylko logo, a nie cały theme. Chyba że tak miało być.

-----------------

### Pojedyncze komentarze jako `TODO:`
Pododawałam jeszcze pojedyńcze komentarze do konkretnych fragmentów kodu.  

Są jako `TODO:`, dlatego, że IDE mają fajne narzędzia do podejrzenia wszystkich "TODOs" z projektu. (Nie dlatego, ze musisz coś zrobić, rób co chcesz :P)  

Są one ponumerowane (np. `TODO: [1]`), żebyś mógł je posprawdzac w logicznej kolejności. Bo niektóre późniejsze komentarze wynikają z poprzednich.  

Ano i nie dawałam komentarzy do absolutnie każdej linijki gdzie coś znalazłam, więc jak trafisz na komentarz np. o tym, żeby nie wykorzystywać React.Fragment (<></>) jeśli nie jest potrzebny, to poszukaj sobie czy w gdzieś indziej nie masz tego samego błędu.
