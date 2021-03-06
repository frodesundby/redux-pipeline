import React from 'react';
import { createDevTools } from 'redux-devtools';
import ChartMonitor from 'redux-devtools-chart-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import Inspector from 'redux-devtools-inspector'

/**
 * These 2 monitors are very commonly used with 'redux-devtools'.
 * However, you can choose to make your own!
 */
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    /**
     * Monitors are individually adjustable via their props.
     * Consult their respective repos for further information.
     * Here, we are placing the LogMonitor within the DockMonitor.
     */
    <DockMonitor toggleVisibilityKey="ctrl-h"
                 changePositionKey="ctrl-q"
                 changeMonitorKey="ctrl-m"
                 defaultIsVisible={true}
    >
        <LogMonitor theme="tomorrow" />
        <ChartMonitor />
        <DiffMonitor />
        <Inspector />
    </DockMonitor>
);

export default DevTools;

/**
 * For further information, please see:
 * https://github.com/gaearon/redux-devtools
 */
