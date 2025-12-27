# Quick Setup: Context7 MCP in Cursor IDE

## ⚡ Quick Steps (2 minutes)

### 1. Get Your API Key
- Visit: https://context7.com/dashboard
- Sign up or log in
- Copy your API key

### 2. Add to Cursor Settings

**Method 1: Via Settings UI (Recommended)**
1. Press `Ctrl+,` (or `Cmd+,` on Mac) to open Settings
2. In the search bar, type: `MCP`
3. Click on **"MCP Servers"** or **"Add MCP Server"**
4. Click **"Add Server"** or the **"+"** button
5. Enter:
   - **Name**: `context7`
   - **Command**: `npx`
   - **Args**: `-y`, `@upstash/context7-mcp`, `--api-key`, `YOUR_API_KEY`
   - Replace `YOUR_API_KEY` with your actual key from step 1

**Method 2: Via Settings JSON**
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Preferences: Open User Settings (JSON)`
3. Add this to your settings file:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY_HERE"]
    }
  }
}
```

4. Replace `YOUR_API_KEY_HERE` with your actual API key
5. Save the file

### 3. Restart Cursor
- Close and reopen Cursor completely
- The MCP server should now be active

### 4. Test It
Open Cursor chat and ask:
```
Use context7 to find React documentation
```

## ✅ Verification

After restarting, you should see:
- Context7 MCP server listed in Cursor's MCP settings
- Status showing as "Connected" or "Active"
- Ability to use Context7 in chat without errors

## 📝 Configuration Reference

See `cursor-mcp-config.json` for the exact JSON configuration you can copy.

## 🆘 Troubleshooting

**Not working?**
1. Check your API key is correct (no extra spaces)
2. Ensure Node.js is installed (`node --version` in terminal)
3. Try running manually: `npx -y @upstash/context7-mcp --api-key YOUR_KEY`
4. Check Cursor's MCP server status in settings
5. Restart Cursor completely

**Need help?**
- Full guide: See `CONTEXT7_MCP_SETUP.md`
- Context7 docs: https://context7.com/docs

