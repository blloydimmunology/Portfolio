# Customizing Topic Icons

## How Topic Icons Work

Each topic in your blog can have a custom icon (emoji) and color. These are configured in `src/config/topics.js`.

## Adding or Changing Topic Icons

Edit `/src/config/topics.js`:

```javascript
export const topicConfig = {
  'Immunology': {
    icon: '🦠',           // Microbe emoji
    color: 'text-blue-700'
  },
  'Cardiology': {
    icon: '❤️',           // Heart emoji
    color: 'text-red-700'
  },
  'Neurology': {
    icon: '🧠',           // Brain emoji
    color: 'text-purple-700'
  },
  'Oncology': {
    icon: '🔬',           // Microscope emoji
    color: 'text-green-700'
  },
  'Genetics': {
    icon: '🧬',           // DNA emoji
    color: 'text-indigo-700'
  },
  // Add your own topics here!
  'YourTopic': {
    icon: '🩺',           // Stethoscope emoji
    color: 'text-teal-700'
  },
  // Default fallback
  'default': {
    icon: '📝',           // Document emoji
    color: 'text-neutral-700'
  }
};
```

## Emoji Suggestions by Topic

**Medical Fields:**
- Cardiology: ❤️ 🫀 💓
- Neurology: 🧠 🧬
- Immunology: 🦠 💉 🧫
- Oncology: 🔬 🧪 🩺
- Genetics: 🧬 🔬
- Pharmacy: 💊 💉
- Surgery: 🔪 🩹
- Dentistry: 🦷

**General Science:**
- Biology: 🔬 🧫 🦠
- Chemistry: ⚗️ 🧪 🧬
- Physics: ⚛️ 🔭
- Technology: 💻 🤖 ⚙️

## Finding Emojis

1. **macOS**: Press `Cmd + Control + Space` to open emoji picker
2. **Windows**: Press `Win + .` (period) to open emoji picker
3. **Online**: Visit [Emojipedia](https://emojipedia.org/) to browse all emojis

## Color Options

Use Tailwind color classes. Some good options for medical topics:

```javascript
'text-blue-700'    // Professional blue
'text-red-700'     // Heart/blood red
'text-green-700'   // Health/life green
'text-purple-700'  // Brain/neurology
'text-indigo-700'  // DNA/genetics
'text-teal-700'    // Medical teal
'text-pink-700'    // Healthcare pink
'text-orange-700'  // Warm accent
```

## How It Works

1. When you create a blog post with a topic (e.g., `topic: "Cardiology"`), the system looks up that topic in `topicConfig`
2. It uses the configured `icon` and `color` for that topic
3. If the topic isn't in the config, it uses the `'default'` config
4. The icon appears next to the topic name in the navigation bar

## Example

If you have a post with:

```yaml
---
topic: "Cardiology"
---
```

The topic pill in the navigation will show:
```
❤️ Cardiology
```

With the red color scheme defined in the config!

## Tips

- Keep icons relevant to the topic
- Use simple, recognizable emojis
- Test on different devices (some emojis render differently)
- Stick to medical/science themed emojis for consistency
