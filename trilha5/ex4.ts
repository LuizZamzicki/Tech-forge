abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): any;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): Record<string, number> {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults() {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1]) 
            .map(([candidate, votes]) => ({ candidate, votes }));
    }
}

const election = new Election();
election.voteFor("Ana");
election.voteFor("Ana");
election.voteFor("Pedro");
console.log("Election:", election.getResults());

const poll = new Poll();
poll.voteFor("Luan");
poll.voteFor("Luan");
poll.voteFor("Maria");
console.log("Poll:", poll.getResults());
