

```typescript

const s = address.substring(2).split("");
const positions: number[] = [];
for (let i = 0; i + 1 < s.length; i += 2) {
    positions.push(Emojis[parseInt(`${s[i]}${s[i + 1]}`, 16)] as unknown as number);
}
String.fromCodePoint(...positions);

```