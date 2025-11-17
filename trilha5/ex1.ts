abstract class TaskManager {
    protected tasks: Record<string, { descricao: string }> = {};

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks[task]) {
            this.tasks[task] = { descricao: `Projeto: ${task}` };
        }
    }

    listTasks(): string[] {
        return Object.values(this.tasks).map(t => t.descricao);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks[task]) {
            this.tasks[task] = { descricao: `Diária: ${task}` };
        }
    }

    listTasks(): string[] {
        return Object.values(this.tasks).map(t => t.descricao);
    }
}

const projeto = new Project();
projeto.addTask("Criar login");
projeto.addTask("Criar login");
projeto.addTask("Banco de dados");

console.log("Projeto:", projeto.listTasks());

const diarias = new DailyTasks();
diarias.addTask("Lavar louça");
diarias.addTask("Estudar TS");
console.log("Diárias:", diarias.listTasks());
