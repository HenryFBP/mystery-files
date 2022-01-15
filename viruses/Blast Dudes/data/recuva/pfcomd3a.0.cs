using System;
using System.Runtime.InteropServices;

namespace Console
{
    public class Window
    {
    
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();
    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
    

    }

}
