# Context7 MCP Setup Guide for Cursor

## Overview
Context7 MCP provides up-to-date, version-specific documentation and code examples directly within your AI coding assistant in Cursor.

## Setup Steps

### Step 1: Get Your Context7 API Key
1. Create an account at [Context7 Dashboard](https://context7.com/dashboard)
2. Navigate to your account settings to get your API key
3. Copy your API key (you'll need it in the next step)

### Step 2: Add Context7 MCP to Cursor

1. **Open Cursor Settings**
   - Press `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac) to open Settings
   - Or go to `File` → `Preferences` → `Settings`

2. **Navigate to MCP Settings**
   - In the settings search bar, type "MCP"
   - Click on `Cursor Settings` → `MCP` → `Add new global MCP server`
   - Or manually navigate to: `Settings` → `Cursor Settings` → `MCP`

3. **Add Context7 MCP Server**
   - Click "Add new global MCP server" or the "+" button
   - Add the following configuration:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
    }
  }
}
```

4. **Replace YOUR_API_KEY**
   - Replace `YOUR_API_KEY` with your actual Context7 API key from Step 1

5. **Save and Restart**
   - Save the configuration
   - Restart Cursor for the changes to take effect

### Step 3: Verify Installation

After restarting Cursor:
1. Open a chat with the AI assistant
2. Try asking: "Use context7 to find documentation about React hooks"
3. If Context7 is working, it should automatically fetch relevant documentation

### Step 4: Configure Auto-Invocation (Optional)

To automatically use Context7 for code-related prompts without manually adding `use context7`:

1. **Open Cursor Rules**
   - Go to `Settings` → `Cursor Settings` → `Rules`
   - Or create/edit `.cursorrules` file in your project root

2. **Add Auto-Invocation Rule**
   Add the following rule:

```
Always use context7 when I need code generation, setup steps, or library documentation.
Automatically use Context7 MCP tools without me having to ask.
```

Or add to `.cursorrules` file:
```
# Auto-invoke Context7 for code-related queries
- Automatically use Context7 MCP for code generation, library documentation, and setup instructions
- Use Context7 when user asks about frameworks, libraries, or APIs
```

## Usage

### Manual Invocation
You can manually invoke Context7 by including `use context7` in your prompts:
- "Use context7 to find the latest React documentation"
- "Use context7 to get examples of TypeScript generics"

### Automatic Invocation
If you've set up auto-invocation rules, Context7 will be used automatically for:
- Code generation requests
- Library documentation queries
- Framework setup instructions
- API documentation lookups

## Benefits

- ✅ **Up-to-date documentation**: Always get the latest version-specific docs
- ✅ **Version-aware**: Knows which version of libraries you're using
- ✅ **Private repository support**: Access private repo docs with API key
- ✅ **Higher rate limits**: Better performance with API key
- ✅ **Seamless integration**: Works directly in Cursor chat

## Troubleshooting

### Context7 Not Working
1. **Check API Key**: Ensure your API key is correct and not expired
2. **Restart Cursor**: After adding MCP server, restart Cursor completely
3. **Check MCP Status**: In Cursor settings, verify the MCP server shows as "Connected"
4. **Check Console**: Look for any error messages in Cursor's developer console

### API Key Issues
- Make sure there are no extra spaces in your API key
- Verify the API key is active in your Context7 dashboard
- Check if you've reached rate limits (free tier has limits)

### Command Not Found
If you see "command not found" errors:
- Ensure Node.js and npm are installed
- Try running `npx -y @upstash/context7-mcp --help` in terminal to verify it works

## Additional Resources

- [Context7 Documentation](https://context7.com/docs)
- [Context7 Installation Guide](https://context7.com/docs/installation)
- [Context7 Dashboard](https://context7.com/dashboard)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)

## Notes

- The MCP server configuration is stored in Cursor's global settings, not in your project
- API keys are stored securely in Cursor's settings
- Free tier has rate limits; paid plans offer higher limits
- Context7 works best with popular open-source libraries and frameworks

